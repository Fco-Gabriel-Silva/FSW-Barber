"use client";

import { Button } from "@/_components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/_components/ui/form";
import { Input } from "@/_components/ui/input";
import { SearchIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resolve } from "path";
import { Resolver } from "dns";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  search: z
    .string({
      required_error: "Campo Obrigatório",
    })
    .trim()
    .min(1, "Campo Obrigatório"),
});

interface SearchProps {
  defaultValues?: z.infer<typeof formSchema>;
}

const Search = ({ defaultValues }: SearchProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    return router.push(`/barbershops?search=${data.search}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Form {...form}>
        <form
          className="flex gap-4 w-full"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="Busque por uma barbearia... "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="default" type="submit">
            <SearchIcon size={20} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Search;
