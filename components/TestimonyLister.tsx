import { testimonies, testimoniesImpl } from "../types/testimonies";

export const TestimonyLister = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-3 text-gray-400 text-sm">
    {testimoniesImpl.map((t, i) => (
      <div key={i}>
        <div>{t.body}</div>
        <div>~{t.author}</div>
      </div>
    ))}
  </div>
);
