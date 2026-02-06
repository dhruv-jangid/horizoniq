import { Search as SearchIcon, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { useLocation } from "@/components/providers/locationProvider";
import { Button } from "./ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useQuery } from "@tanstack/react-query";
import { searchLocationQueryOptions } from "@/server/queries";
import { useDebounce } from "use-debounce";

export const Search = () => {
  const { setLocation } = useLocation();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedQuery] = useDebounce(query, 500);

  const { data = [] } = useQuery(searchLocationQueryOptions({ query: debouncedQuery }));

  const handleSearchClose = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      <Button size="icon-lg" variant="outline" onClick={() => setIsOpen(true)}>
        <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-8" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-xl relative">
            <InputGroup>
              <InputGroupInput
                className="rounded-4xl placeholder:text-white/80"
                type="text"
                placeholder="Search location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />

              <InputGroupAddon>
                <HugeiconsIcon strokeWidth={2} icon={SearchIcon} color="#fff" className="size-5" />
              </InputGroupAddon>

              <InputGroupAddon align="inline-end">
                <HugeiconsIcon
                  strokeWidth={2}
                  icon={X}
                  color="#fff"
                  className="size-5 cursor-pointer"
                  onClick={handleSearchClose}
                />
              </InputGroupAddon>
            </InputGroup>

            {data.length > 0 && (
              <ul className="mt-2 bg-muted text-black rounded-xl shadow-xl overflow-y-auto max-h-96">
                {data.map((place) => (
                  <li
                    key={`${place.lat}-${place.lon}`}
                    className="py-3.5 px-5 leading-tight tracking-tight text-shadow-none hover:bg-muted-foreground hover:text-white cursor-pointer"
                    onClick={() => {
                      setQuery("");
                      setLocation([place.lat, place.lon]);
                      setIsOpen(false);
                    }}
                  >
                    {place.name}, {place.country}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
