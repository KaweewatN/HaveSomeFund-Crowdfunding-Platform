"use client";

import Link from "next/link";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
//zod
import { loginZod, loginZodType } from "../../common/signin.zod";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toastSuccess, toastError } from "@/components/core/appToast";

export default function Login() {
  const form = useForm<loginZodType>({
    resolver: zodResolver(loginZod),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit: SubmitHandler<loginZodType> = async (data) => {
    startTransition(async () => {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });

        if (result?.error) {
          toastError("Something went wrong, please try again");
        } else {
          toastSuccess("Sign in successfully");
          router.push("/campaigns");
        }
      } catch (error) {
        toastError(error as string);
        throw new Error(`Sign-in failed: ${error}`);
      }
    });
  };

  return (
    <div className="container relative flex py-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to sign in to your account
          </p>
        </div>
        <div className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jondoe@email.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => {
                      return (
                        <FormItem className="w-full">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <PasswordInput placeholder="Password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Signing in..." : "Sign in"}
                </Button>
              </div>
            </form>
          </Form>
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
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Image
                src="./assets/icons/google.png"
                alt="google-image"
                width={16}
                height={16}
                className="object-cover"
              />
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Image
                src="./assets/icons/facebook.png"
                alt="google-image"
                width={16}
                height={16}
                className="object-cover"
              />
              Facebook
            </Button>
          </div>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="underline underline-offset-4 hover:text-teal-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
