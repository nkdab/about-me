import { Badge } from "@/shared/ui/badge";

export function ProjectMeta({
  tags,
  roles,
}: {
  tags: string[];
  roles: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {roles.concat(tags).map((entry) => (
        <Badge key={entry}>{entry}</Badge>
      ))}
    </div>
  );
}
