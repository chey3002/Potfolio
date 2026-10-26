---
title: "Building PAB: two months teaching a computer to play Pokémon battles"
description: "A side project that set out to train an AI for Pokémon Showdown and ended as a Chrome extension that gives advice during your battles. What I planned, what I trained, what failed, and what finally worked."
date: 2026-10-20
---

# Building PAB: two months teaching a computer to play Pokémon battles

*I set out to train an AI that plays Pokémon battles, and ended up with a
Chrome extension that gives you advice while you play. This is what I planned,
what I trained, what failed, and what finally worked.*

![The project in four numbers](graficos/dark/00-key-numbers.png)

[Pokémon Showdown](https://pokemonshowdown.com) is a free website where people
play Pokémon battles against each other, right in the browser. It's where most
competitive players practice. A battle is turn-based: each turn, both players
pick an action at the same time, either one of their Pokémon's four moves or a
switch to another Pokémon on their team, and then both actions happen.

PAB is an extension for Chrome that sits next to your battle and helps you
decide. Each turn it shows a panel with the move it recommends and the reasons
behind it: how much damage each move does, who will move first, whether you can
knock out the opponent, whether they can knock you out, and what your opponent
is probably carrying. It never plays for you. You still make every choice.

I built it in my free time between 20 August and 20 October 2026. Along the
way, my own design was proven wrong several times, and the most important
result only appeared after I found a bug in the code I was using to measure
everything.

---

## The original idea

The plan had two parts:

1. **Train a computer player** that plays Showdown battles well.
2. **Build a Chrome extension** that uses that player to recommend moves in
   your own battles, and explains why.

Before writing any code, I set a few rules:

- **No chatbots making decisions.** I didn't want a large language model like
  ChatGPT guessing moves. The player had to learn from the game itself.
- **It should work in any format.** Showdown has dozens of formats: different
  generations of the games, random teams, teams you build yourself, singles and
  doubles. I wanted one player that understands the mechanics, not one that
  memorized a single format.
- **The extension only reads.** It can look at the battle, but it can never
  send a move or anything else on your behalf. The build checks this
  automatically and fails if that rule is broken.
- **Measure everything.** Every idea had to be tested with real battles and
  numbers, and I wrote down what result would count as success *before*
  running each test, so I couldn't move the goalposts afterwards.

That last rule turned out to be the most important one.

### How it went

| When | Step | Result |
|---|---|---|
| August | Check that it's possible on a home PC | Yes, with room to spare |
| August | Build the game engine and a way to test players against each other | Works, and every test is repeatable |
| August–September | Build the extension | A panel inside Showdown that only reads |
| August–September | Collect training data from real battles | 6.06 million decisions made by human players |
| Late August | Teach a neural network by copying human players | It copied them well and played badly |
| September | Let the network practice by playing against itself | It became the strongest player of the project |
| October | Teach the computer to think one turn ahead | Not better on its own, useful with the network's help |
| 20 October | Publish | Submitted to the Chrome Web Store |

---

## Step 1: can a home computer do this?

The kind of AI training I had in mind, called **reinforcement learning**, learns
by playing a huge number of games and getting rewarded for winning. So the
first question was whether my desktop computer could play enough battles.

Showdown's battle code is open source, so I could run battles on my own
machine, without a browser and without the website. Running 16 battles in
parallel, it played about **100 battles per second**. With a neural network
making the decisions, and everything else the training needed around it, the
real number was about **12 battles per second**, which is still around a
million battles a day. That was more than enough.

My first design called for a large network. Comparing four different designs,
and then 22 configurations of the best one, showed that a small network did
just as well and ran faster. The
network I ended up using has about **2.26 million parameters** (the numbers it
adjusts while learning), which is tiny by today's standards.

---

## Step 2: learning from 121,600 real battles

Showdown saves a replay of every public battle. I downloaded about **121,600**
of them, from 10 formats and 6 generations of the games, and turned them into
**6.06 million decisions**. Each decision records what the battle looked like,
which options the player had, and what they chose.

This step taught me to distrust my own conclusions. At one point I decided that
doubles battles (two Pokémon on each side) didn't fit my design, because more
than a third of their decisions were coming out broken. The real cause was a
small mistake in the code that read the replays. Once fixed, doubles were not
a problem at all.

The data also showed that training on many formats was the right call. A
network trained only on the newest generation already learned something useful
about the very first one, from 1996: it got 56% of the way to a network trained
on that generation directly. A network trained on six formats got 76% of the
way there, and on generation 3 it reached 95%. Seeing many formats is what
teaches it the general mechanics.

### How the network sees a battle

The network doesn't see the screen. It gets a summary of the battle in a fixed
shape:

- **One entry for each of the 12 Pokémon**, 6 per side, with its species, moves,
  item, ability, health and status. For your own team it knows everything, the
  same as you. For your opponent's team it only knows what has been revealed
  so far.
- **One entry for the field**: weather, terrain and other effects, plus the
  format being played. That last part is what lets one network handle many
  formats.
- **One entry for each side's traps and barriers**, like Stealth Rock or
  Reflect.

From that, it answers three questions: which of the available actions to take,
how likely it is to win from here, and whether to Terastallize this turn (a
once-per-battle power-up in the newest games).

### Inside the network

![How the network decides](graficos/dark/06-how-the-network-decides.png)

Each of those 15 entries is turned into a list of numbers that the network
learns during training: one list per species, per move, per item, and so on.
Then a **transformer**, the same kind of model behind today's language models
but tiny, lets the entries exchange information in two rounds (its two
layers). After that, each Pokémon's entry also carries what it's facing, what's
on the field and what threats are around.

The most important design choice is how the network picks an action. The simple
way is to give it 9 fixed outputs, one per button: "first move", "second
move"... "fifth switch". Then it has to learn that the first button is
Earthquake in one battle and Thunderbolt in the next. PAB does something else:
each available action becomes an entry of its own, described by *what it is*
(which move, or which Pokémon would come in). Each action entry then "looks at"
the battle, through a mechanism called attention, and gets a score. Actions
that aren't legal this turn are removed, and the scores are turned into
probabilities.

That way the network learns what an action means, not which button it sits on,
and that knowledge carries over between formats. I compared four designs, and
this one kept 56% of its skill on a generation it had never seen, against 27%
for the button-based version.

The other two answers come from a summary of the whole battle: a small layer
turns it into the chance of winning, and another into a yes or no on
Terastallizing. Tera is a separate answer because in the game you don't pick
Tera *instead* of a move: you Terastallize and use a move in the same turn.

In total the network has 2.26 million parameters, 256 numbers per entry and two
layers.

---

## Step 3: the engine, a reference player, and a fair referee

Around the network there is a lot of ordinary code, which I call the engine. It
reads the battle as it happens, keeps track of every Pokémon, lists the legal
actions, calculates damage and makes educated guesses about the opponent's
hidden information. Three parts are worth mentioning:

- **Damage.** My damage calculator gives the same results as the one the
  competitive community uses, on every type matchup I tested. Comparing against
  it later caught three real bugs, where my numbers were off by 25–33% in
  specific situations.
- **Guessing the opponent's set.** A Pokémon's "set" is its combination of
  moves, item and ability. In battles with random teams, every Pokémon can only
  carry a limited list of sets, so each move the opponent reveals rules some
  out. In formats where people build their own teams, the engine
  uses community statistics on what people usually carry. In the main
  competitive format of the newest generation, what opponents later revealed
  was in its list of possibilities **96.2%** of the time.
- **Tests.** The engine has 2,239 automated tests. To check that the tests
  actually catch mistakes, I used a technique called mutation testing: a tool
  plants thousands of small bugs in the code, one at a time, and counts how
  many the tests notice. They catch **88%**.

On top of the engine I wrote a **hand-made player**, a set of rules like "use
the move that does the most damage", "heal when you're low" or "don't switch
in a Pokémon that is weak to the attack coming". I'll call it the rule-based player.
It wins 99% of its battles against a player that picks at random, and about 72%
against a player that always uses its strongest attack. It's the yardstick for
everything else in this post.

### The referee was broken

To compare two players, I make them play each other hundreds of times on the
simulator, switching sides halfway, and count wins.

At one point I ran the same comparison three times and got 35.5%, 46.5% and
43.5%. Same players, same settings, results 11 points apart. The cause was the
random seed, the number that decides all the luck in a battle. I was fixing it
for the battle itself, but each player's team was being picked with a
*different* seed that I wasn't fixing. Every run was playing different battles.

Once I fixed all of them, repeated runs gave exactly the same result. From then
on, two versions of a player always face the exact same battles, and I compare
them battle by battle: in how many battles did one win where the other lost?
That is far more sensitive than comparing two win rates.

A note on the statistics in this post: when I give a **p-value**, it's the
chance of seeing a difference that large by pure luck if the two players were
actually equal. Below 0.05 is the usual bar for calling a difference real.

---

## Step 4: copying human players

The first network learned the simplest way: show it a battle situation and ask
it to predict what the human did. This is called **behavior cloning**.

It got good at copying. Half the time it picked exactly the same action as the
human. And it won only **39%** of its battles against the player that always
uses its strongest attack, a player my handful of rules beats 72% of the time.

That was the main lesson of the first month: **getting better at predicting
what humans do didn't make it play better.** People make mistakes, and a
network trained to copy them copies the mistakes too.

![The network against the rule-based player, version by version](graficos/dark/02-network-by-version.png)

Two things helped, in this order:

- **Removing a hidden hint.** The data accidentally told the network which of
  its options were real moves and which were padding. Taking that hint away
  made it worse at copying humans and better at winning.
- **More and cleaner data.** With 6 million decisions and the replay-reading
  bugs fixed, the network started beating the rule-based player: 61%, then 66%.

### How the copying works

Each of the 6.06 million decisions is a question with a known answer: in this
situation, among the actions that were legal, the human picked this one. The
network's scores are turned into probabilities over the legal actions only, and
training nudges it to give more probability to the one the human picked. (The
standard name for this objective is cross-entropy.)

Two smaller objectives are trained at the same time, each counting 30% as much:
predicting whether that player went on to win the battle, and whether they
Terastallized that turn. The second only counts on turns where Tera was
available; otherwise the network would learn to always say no.

To check progress honestly, 15% of the battles were set aside and never used
for training. The split is by battle, not by decision: decisions from the same
battle are so alike that mixing them would let the network recognize the test
questions. Training made 14 passes over the data, and I kept the version that
did best on the set-aside battles.

On those battles, the final copying network picked exactly the human's action
55.5% of the time, had it among its top three 88.3% of the time, and guessed
who would win the battle 75.3% of the time.

Two things that looked promising didn't work out:

- **Predicting who will win.** I also trained the network to estimate its
  chance of winning from any position. At first it memorized the training
  battles: perfect on those, and worse than a coin flip on new ones. Training on
  more formats fixed that, and after adjusting its numbers, when it said "70%
  chance to win" it really won about 70% of the time.
- **A smarter way to copy.** I tried copying humans while giving more weight to
  decisions that turned out well. The first test looked like a small win. When
  I repeated it more carefully, with more data, the gain disappeared.

---

## Step 5: practicing against itself

Copying has a ceiling: the network can only get as good as the players it
copies, mistakes included. To go further it has to learn from its own results.
That is reinforcement learning, and I used a standard method for it called
**PPO** (Proximal Policy Optimization), starting from the copying network. One
round of training goes like this:

1. **Play.** The network plays 64 battles against an opponent from its league
   (more on that below). To explore, it doesn't always take its favorite
   action: it picks at random, in proportion to its own probabilities, so it
   sometimes tries something new. The opponent always plays its best.
2. **Score.** The only reward is the result at the end: +1 for a win, −1 for a
   loss. Every decision of that battle gets the same result.
3. **Compare with what it expected.** Before each decision, the network had
   already estimated its chance of winning. If the battle went better than it
   expected, the actions it took get a bit more probability next time; if it
   went worse, a bit less. Comparing against its own expectation is what
   separates a good decision from a lucky one.
4. **Take small steps.** In one round, the probability of an action can't move
   by more than 20% of its value. That limit is the "proximal" in PPO: without
   it, one lucky round could undo what the network already knew. Each round's
   battles are used 4 times, with a small learning rate.

It ran for 200 rounds, 12,800 battles in total.

**The league.** Playing only against its latest self is risky: the network can
learn to beat one particular style and forget the rest. So every 3 rounds a
frozen copy of it joined a pool of past versions, and each round's opponent was
drawn from that pool, more often the ones it was losing to. (The method is
called prioritized fictitious self-play.) An Elo rating, like the one used in
chess, tracked its progress, measured in separate battles where both sides
played their best.

**A bug worth telling.** The first runs looked unstable: the updates kept
hitting the 20% limit. I lowered the learning rate tenfold, expecting things
to calm down, and it got worse. The cause was dropout, a training technique
that randomly switches off parts of the network. It was on while learning and
off while playing, so the "before" and "after" probabilities of the same
decision differed even when nothing had been learned yet. Running the updates
with dropout off fixed it.

The result: from 66% to **70%** against the rule-based player, measured on the
exact same 3,000 battles. It was the biggest improvement of the whole project.

---

## Step 6: thinking one turn ahead

The rule-based player and the network both look at the current turn and pick
an action. Neither asks "if I do this, what will my opponent do, and where does
that leave me?" So the next step was to add that kind of thinking, called
**search**.

A Pokémon turn is a guessing game, a bit like rock-paper-scissors: both players
choose at the same time. So the search builds a table with every one of my
options against every likely option of my opponent, scores how each
combination would turn out, and works out the best way to mix my choices so my
opponent can't predict and punish me. Game theory calls that mix an
**equilibrium**. When it says "Earthquake 60% of the time, switch 40%",
showing only Earthquake would hide half of the advice, so the panel shows both.

I set a rule for this part of the project: each new step would only go ahead
if the previous one beat what I already had. The results:

- **On its own, the search tied the rule-based player** at 49%. I tuned it by
  trying 16 different settings, and the best one won 55% in those tests. On
  fresh battles it went back to 49%. When you pick the best of 16 noisy
  results, you're partly picking the luckiest one. That's why I always test
  the winner again on battles it has never seen.
- **Using Showdown's real battle code to predict each turn didn't help.** My
  quick approximation agreed with it 85% of the time, and the two played
  equally well.
- **Better predictions didn't help either.** This is the result I find most
  interesting:

![Predicting better is not playing better](graficos/dark/04-predicting-vs-playing.png)

To score each combination in the table, the search needs to judge how good a
position is. I compared my simple hand-written judge, which mostly counts
health and Pokémon left, with two machine-learning models trained on 136,290
positions. Both models were better at predicting who would win the battle. Put
inside the search, both played **much worse**: they won 31% and 9% of their
battles, against 49% for my simple judge. It's the same lesson as copying
humans: a better score on a test isn't the same as playing better.

### Mixing the network and the search

Then I tried combining the two, in both directions. These tests came a few
weeks later, against a rule-based player that had improved in the meantime and
with the search on its default settings, so here the search alone wins 43%
instead of 49%.

**The network learning from the search.** I had the search play 10,000 battles
against itself, 701,287 decisions in all, and trained the network to make the
same choices. Not just the move the search picked: its whole mix, like "60%
Earthquake, 40% switch", so the network would also learn when to mix. It used
the same objective as copying humans, with the mix in place of a single
answer.

![The network learning to imitate the search](graficos/dark/05-distillation.png)

It learned to copy the search well, and that's why it got worse. The search was
a weaker player than the network, so copying it made the network play like the
search: it went from winning 69% against the rule-based player to 42%.

**The search taking advice from the network** worked much better:

![Search, network and combinations, against the rule-based player](graficos/dark/03-search-and-network.png)

When the network picked its two favorite moves and the search chose between
them, the search won **22 points more** than on its own. But no combination
beat the network playing alone.

---

## The real test, and a bug in the measuring code

Beating my own rule-based player only proves so much. The real test was
[Foul Play](https://github.com/pmariglia/foul-play), an open-source bot built
to play Showdown. It searches many moves ahead, which makes it a much stronger
opponent than anything I had built.

For weeks, my measurements said that against Foul Play, the network and the
rule-based player were equally weak: about 16% and 15%. That was strange. The
network beat the rule-based player 70% of the time, and yet against a real
opponent the difference vanished.

Right before the final measurement, I found out why. The code that let the
network play these outside battles had a bug. In the newest generation each
attack can also be used with Terastallization, so the engine's list of actions
has a second copy of each attack. The network received the list without
those copies, but its answers were read back against the list *with* them. So
whenever Terastallization was available, which is most of a battle, the
network's scores ended up attached to the wrong actions. In practice it could
never decide to switch Pokémon on its own.

The code used for training and for my internal comparisons didn't have this
bug, so the 70% against the rule-based player still holds. Only the battles
against Foul Play were affected. After fixing it, and measuring the rule-based
player again over 250 battles:

![Against Foul Play, a search-based bot](graficos/dark/01-vs-foul-play.png)

The network won **20.4%** of its battles and the rule-based player **11.2%**
(p = 0.0067). It's the first time something in this project clearly beat the
rule-based player against an outside opponent. Both still lose most of their
battles against Foul Play, but the gap is real.

---

## The extension

![The panel: what to do this turn](imagenes/panel-what-to-do.png)

The extension adds a panel next to your battle, as its own tab inside Showdown.

- **At the top, a summary**: the recommended move (or the mix, when two moves
  are close), who moves first, whether you can knock the opponent out, and
  whether they can knock you out.
- **Below, tables you can fold away**: the damage of each move, how much each
  Pokémon on your bench would take if you switched in, and stats.
- **What your opponent is probably carrying**, with the options that have been
  ruled out, and fields you can edit when you know better.
- **Two ways to decide**, with a switch at the top of the panel: "Rules",
  the rule-based player, which is the default, or "Search", which explains
  itself in terms of your opponent, for example "if
  they use Magma Storm, you come out ahead". It takes 3 to 4 milliseconds per
  turn in the browser.

![The panel: what your opponent is probably carrying](imagenes/panel-set-inference.png)

The first version put the recommendation at the very bottom, under four tables.
After using it in real battles I found it had a lot of information and very few
clear signals, so I redesigned it in eleven small steps, borrowing interface
ideas (but no code, because of its license) from
[Showdex](https://github.com/doshidak/showdex), an extension many Showdown
players already use. The panel got about a quarter shorter, and it no longer
needs scrolling in any of the situations I test.

Two problems from building it:

- **The panel was empty in Showdown's new interface.** The new version of the
  site handles its connection in a background process, out of reach of the
  part of the page the extension was watching. I made the extension watch
  that background process too, still without being able to send anything, and
  added an automated test against the real Showdown site so it can't break
  silently again.
- **The network doesn't fit in the extension.** It's 9 MB, the whole extension
  is 2 MB, and compressing the network broke it. So the extension uses the
  rule-based player by default, and the network stays on my computer for now.

The extension is called **"PAB: tactical assistant"**. I left "Pokémon" out of
the name, since it's a trademark. I submitted it to the Chrome Web Store on
20 October, and it's under review.

---

## What I learned

- **Measure the thing you actually care about.** Copying humans better,
  predicting the winner better and copying the search better all made the
  player worse at winning.
- **Check the measuring tool before trusting the result.** The two biggest
  surprises of the project were bugs in the code that measured things: the
  random seed that didn't fix the teams, and the scores attached to the wrong
  actions. Both produced believable, wrong numbers for weeks.
- **Decide what counts as success before you test.** Several steps of the
  project didn't pass their own bar, and that was useful too: it told me where
  not to spend the next month.
- **Let your experiments prove you wrong, even about being wrong.** Five of my
  design decisions turned out to be mistakes. Two of my corrections were also
  wrong, and only measuring again showed it.

## What's next

- **Thinking two turns ahead, with the network's advice.** The one thing this
  project never tried is looking further ahead.
- **More practice games, using Terastallization.** The network learned when to
  Terastallize from human replays, but its practice games never used it.
- **The network inside the extension**, which means making it smaller.
- And waiting for the Chrome Web Store review.
