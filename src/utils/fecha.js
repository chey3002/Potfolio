/** La fecha 'YYYY-MM-DD' como "October 20, 2026", sin depender de la zona horaria. */
export function fechaLegible(iso) {
    const [a, m, d] = String(iso).split('-').map(Number);
    if (!a || !m || !d) return iso;
    return new Date(Date.UTC(a, m - 1, d)).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
    });
}
