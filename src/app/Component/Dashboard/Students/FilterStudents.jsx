const FilterStudents = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <select
        name="studentClass"
        required
        className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
      >
        <option value="">Select a class</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
        <option value="">9</option>
        <option value="">10</option>
      </select>
      <select
        name="studentSection"
        required
        className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
      >
        <option value="">Select a section</option>
        <option value="">A</option>
        <option value="">B</option>
        <option value="">C</option>
      </select>
      <select
        name="studentSession"
        required
        className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
      >
        <option value="">Select a session</option>
        <option value="">2019</option>
        <option value="">2020</option>
        <option value="">2021</option>
      </select>

      <div>
        <button className="btn btn-sm btn-primary btn-outline hover:bg-primary">
          search
        </button>
      </div>
    </div>
  );
};

export default FilterStudents;
