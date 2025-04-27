import { useState } from "react";
import { services as allServices, contact } from "../content";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Check, Scissors, User, Mail, Phone, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Zod schema for form validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  services: z
    .array(z.string())
    .min(1, { message: "Veuillez sélectionner au moins un service." }),
});

// Main ReservationPopup component
const ReservationPopup = ({ trigger, open, onOpenChange }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: [],
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    // Format the message
    const message = `\nBonjour, je souhaite réserver :\nNom : ${
      data.name
    }\nServices : ${data.services.join(", ")}`.trim();

    // WhatsApp number from content.js (remove + and spaces)
    // const whatsappNumber = contact.phone.replace(/[^0-9]/g, "");

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp URL
    const whatsappUrl = `${contact.whatsapp}?text=${encodedMessage}`;

    // Log WhatsApp URL to console
    console.log("WhatsApp URL:", whatsappUrl);
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Helper to remove a selected service
  const removeService = (service) => {
    const current = form.getValues("services");
    form.setValue(
      "services",
      current.filter((s) => s !== service)
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[430px] rounded-2xl bg-charcoal-black border-light-gold-accent p-0">
        {/* Header with icon and title */}
        <DialogHeader className="px-8 pt-8 pb-2">
          <div className="flex items-center gap-2">
            <Scissors className="text-light-gold-accent w-8 h-8" />
            <DialogTitle className="text-3xl font-extrabold text-light-gold-accent font-playfair">
              Réservez maintenant
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="px-8 pb-8 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Nom</FormLabel>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <FormControl>
                        <Input
                          placeholder="Votre nom"
                          {...field}
                          className="pl-10 bg-black/30 border-none rounded-xl text-ivory-cream placeholder:text-gray-400 focus:ring-2 focus:ring-light-gold-accent"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* Email field */}
              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Email</FormLabel>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <FormControl>
                        <Input
                          placeholder="Votre email"
                          {...field}
                          className="pl-10 bg-black/30 border-none rounded-xl text-ivory-cream placeholder:text-gray-400 focus:ring-2 focus:ring-light-gold-accent"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              /> */}
              {/* Phone field */}
              {/* <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">
                      Téléphone
                    </FormLabel>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <FormControl>
                        <Input
                          placeholder="Votre numéro de téléphone"
                          {...field}
                          className="pl-10 bg-black/30 border-none rounded-xl text-ivory-cream placeholder:text-gray-400 focus:ring-2 focus:ring-light-gold-accent"
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              /> */}
              {/* Services multi-select */}
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ivory-cream">Services</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-between bg-black/30 border-none text-ivory-cream rounded-xl hover:bg-black/50 focus:ring-2 focus:ring-light-gold-accent"
                        >
                          {field.value.length > 0
                            ? `${field.value.length} service(s) sélectionné(s)`
                            : "Sélectionnez des services"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 bg-charcoal-black border-0 rounded-xl mt-2 w-[var(--radix-popover-trigger-width)]">
                        <Command className="bg-charcoal-black">
                          <CommandGroup className="max-h-48 overflow-auto">
                            {allServices.map((service) => (
                              <CommandItem
                                key={service.title}
                                value={service.title}
                                onSelect={() => {
                                  const current = field.value;
                                  const exists = current.includes(
                                    service.title
                                  );
                                  field.onChange(
                                    exists
                                      ? current.filter(
                                          (s) => s !== service.title
                                        )
                                      : [...current, service.title]
                                  );
                                }}
                                className="text-ivory-cream hover:bg-black/50 cursor-pointer transition-colors rounded-lg"
                              >
                                <Check
                                  className={
                                    field.value.includes(service.title)
                                      ? "mr-2 h-4 w-4 text-light-gold-accent opacity-100"
                                      : "mr-2 h-4 w-4 opacity-0"
                                  }
                                />
                                {service.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* Selected services as chips/tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {field.value.map((service) => (
                        <span
                          key={service}
                          className="flex items-center gap-1 bg-black/50 text-ivory-cream rounded-full px-3 py-1 text-sm font-semibold"
                        >
                          {service}
                          <button
                            type="button"
                            onClick={() => removeService(service)}
                            className="ml-1 text-light-gold-accent hover:text-red-400"
                            aria-label={`Retirer ${service}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              {/* Submit button */}
              <Button
                type="submit"
                className="w-full rounded-full bg-light-gold-accent text-black text-lg font-bold py-4 mt-2 hover:bg-light-gold-accent/90 transition-colors"
              >
                Réservez maintenant
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationPopup;
