import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";

export default function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    
    if (password !== confirmPassword) {
        redirect('/sign-up?message=Passwords do not match');
        }
    
    const supabase = createClient();
        
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/sign-up?message=Could not authenticate user");
    }

    return redirect(`/confirm?message=Check email({email}) to continue sign in process`);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form action={signUp} className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="password"
          placeholder="Password"
          required
        />
        <label className="text-md" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <SubmitButton
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Signing Up..."
        >
          Sign Up
        </SubmitButton>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-red-800 text-center">
            {searchParams.message}
          </p>
        )}
        <Link href="/login" className="rounded-md no-underline text-foreground text-sm">
        Already have an account? Sign In
        </Link>
      </form>
    </div>
  );
}
