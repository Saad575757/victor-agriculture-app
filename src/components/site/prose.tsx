import { cn } from "@/lib/utils";

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((segment, index) => {
    if (segment.startsWith("**") && segment.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {segment.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{segment}</span>;
  });
}

interface ProseProps {
  content: string;
  className?: string;
}

export function Prose({ content, className }: ProseProps) {
  const blocks: React.ReactNode[] = [];
  const lines = content.split("\n");
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={`list-${key++}`} className="ml-1 space-y-2">
        {listItems.map((item, index) => (
          <li key={index} className="relative pl-5 text-muted-foreground">
            <span
              className="absolute left-0 top-2.5 size-1.5 rounded-full bg-primary"
              aria-hidden="true"
            />
            {renderInline(item)}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }

    flushList();

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={`h2-${key++}`}
          className="font-heading text-2xl font-semibold tracking-tight pt-4 first:pt-0"
        >
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={`quote-${key++}`}
          className="border-l-4 border-primary/40 bg-secondary/40 px-5 py-4 font-heading text-lg text-foreground italic"
        >
          {renderInline(line.slice(2))}
        </blockquote>,
      );
      continue;
    }

    blocks.push(
      <p key={`p-${key++}`} className="text-muted-foreground">
        {renderInline(line)}
      </p>,
    );
  }

  flushList();

  return (
    <div
      className={cn(
        "flex flex-col gap-5 text-base/relaxed leading-relaxed",
        className,
      )}
    >
      {blocks}
    </div>
  );
}
