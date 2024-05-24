import Column from "./column";
import NewTodoDialog from "./newtododialog";

import { Dialog } from "./ui/dialog";

export default function Columns() {
  return (
    <div>
      <div className="mb-5">
        <NewTodoDialog />
      </div>
      <section className="mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 ">
        <Column title="Todo" status="TODO" />
        <Column title="In Progress" status="IN_PROGRESS" />
        <Column title="Done" status="DONE" />
      </section>
    </div>
  );
}
