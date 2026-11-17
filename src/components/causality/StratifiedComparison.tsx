import type { CausalitySummary } from "@/lib/causality-store";

export function StratifiedComparison({
  summary,
  x0,
  x1,
  yLabel,
}: {
  summary: CausalitySummary;
  x0: string;
  x1: string;
  yLabel: string;
}) {
  const cell = "border border-line px-3 py-2 text-right tabular-nums";
  const head = "border border-line bg-surface px-3 py-2 text-left font-semibold";
  const gap = (mean0: number, mean1: number) => mean1 - mean0;
  const signed = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(2)}`;

  return (
    <figure className="mt-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className={head}>Comparison</th>
            <th className={`${head} text-right`}>{x0}</th>
            <th className={`${head} text-right`}>{x1}</th>
            <th className={`${head} text-right`}>Gap</th>
          </tr>
        </thead>
        <tbody>
          {summary.groups.map((group) => {
            const n = group.n0 + group.n1;
            return (
              <tr key={group.label}>
                <td className={`${cell} text-left font-medium`}>{group.label}</td>
                <td className={cell}>
                  {group.n0} rows, average {group.mean0.toFixed(2)}
                </td>
                <td className={cell}>
                  {group.n1} rows, average {group.mean1.toFixed(2)}
                </td>
                <td className={`${cell} font-bold text-accent`}>
                  {signed(gap(group.mean0, group.mean1))} ({n} rows)
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="mt-3 text-sm text-muted">
        Average {yLabel} for each group. The top row is the overall gap. The rows below are the
        same comparison inside each level of the third variable.
      </figcaption>
    </figure>
  );
}
