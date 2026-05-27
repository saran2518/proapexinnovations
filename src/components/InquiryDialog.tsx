import { useState, type ReactNode } from "react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function InquiryDialog({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[String(i.path[0])] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const subject = encodeURIComponent(`Enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCompany: ${parsed.data.company || "-"}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:proapexinnovations@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      toast.success("Thanks — your enquiry is ready to send.");
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] bg-cream border-line">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-normal text-navy">
            Place an enquiry
          </DialogTitle>
          <DialogDescription className="text-slate-ink">
            Partners, investors, press — share a brief outline and we'll respond directly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-ink">Name</Label>
            <Input id="name" name="name" maxLength={100} required />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-ink">Email</Label>
            <Input id="email" name="email" type="email" maxLength={255} required />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-ink">Company (optional)</Label>
            <Input id="company" name="company" maxLength={150} />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message" className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted-ink">Message</Label>
            <Textarea id="message" name="message" rows={5} maxLength={1000} required />
            {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={submitting} className="bg-navy text-white hover:bg-navy/90">
              {submitting ? "Sending…" : "Send enquiry"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
