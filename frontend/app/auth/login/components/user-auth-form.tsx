"use client";

import * as React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useAuthGuard } from "@/lib/auth/use-auth";
import { HttpErrorResponse } from "@/models/http/HttpErrorResponse";
import ErrorFeedback from "@/components/error-feedback";
import Link from "next/link";
import { FaGithub, FaGoogle} from "react-icons/fa";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Schema = z.infer<typeof loginFormSchema>;
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {login} = useAuthGuard({middleware: 'guest', redirectIfAuthenticated: '/products'});
  const [errors, setErrors] = React.useState<HttpErrorResponse | undefined>(undefined);

  async function onSubmit(data: Schema) {
    login({
      onError: (errors) => {
        setErrors(errors)
        if (errors) {
          toast.error("Authentication failed");
        }
      },
      props: data,
    })
  }

  const { register, handleSubmit, formState } = useForm<Schema>({
    resolver: zodResolver(loginFormSchema),
    reValidateMode: "onSubmit",
  });

  function getProviderLoginUrl(provider: 'google' | 'facebook' | 'github' | 'okta') {
    // return process.env.NEXT_PUBLIC_BASE_URL + `/oauth2/authorization/${provider}`
    return `/oauth2/authorization/${provider}`
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="text"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {formState.errors.email && (
              <small className="text-red-600">
                {formState.errors.email.message}
              </small>
            )}

            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            {formState.errors.password && (
              <small className="text-red-600">
                {formState.errors.password.message}
              </small>
            )}
          </div>

          <ErrorFeedback data={errors} />
          
          <Button disabled={isLoading} type="submit">
            {isLoading && 'Logging in...'}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <Link href={getProviderLoginUrl('github')}>
          <Button variant="outline" type="button" disabled={isLoading} className="w-full">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
        
        <Link href={getProviderLoginUrl('google')}>
          <Button variant="outline" type="button" disabled={isLoading} className="w-full">
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </Link>
      </div>
    </div>
  );
}
