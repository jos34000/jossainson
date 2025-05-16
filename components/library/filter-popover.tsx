import { Button } from "@/components/shadcn/button"
import { Checkbox } from "@/components/shadcn/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/popover"
import { Filter } from "lucide-react"

type FilterCategory = {
  label: string
  options: string[]
}

const filterCategories: FilterCategory[] = [
  {
    label: "Type",
    options: ["UI", "Layout", "Navigation", "Form", "Data Display"],
  },
  {
    label: "Status",
    options: ["New", "Updated", "Deprecated"],
  },
  {
    label: "Complexity",
    options: ["Simple", "Moderate", "Complex"],
  },
]

interface FilterPopoverProps {
  selectedFilters: string[]
  onFilterChange: (filters: string[]) => void
}

export const FilterPopover = ({
  selectedFilters,
  onFilterChange,
}: FilterPopoverProps) => {
  const handleFilterChange = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter((f) => f !== filter))
    } else {
      onFilterChange([...selectedFilters, filter])
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" title="Filtrer">
          <Filter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h4 className="font-medium leading-none">Filtres</h4>
          <div className="space-y-4">
            {filterCategories.map((category) => (
              <div key={category.label} className="space-y-2">
                <h5 className="text-sm font-medium leading-none">
                  {category.label}
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {category.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={selectedFilters.includes(option)}
                        onCheckedChange={() => handleFilterChange(option)}
                      />
                      <label
                        htmlFor={option}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
