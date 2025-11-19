'use client';

import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/button';
import { useActionState, useRef } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/10 transition-all sm:p-10">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2">
                    Vodomat
                </h1>
                <p className="text-lg text-blue-200 font-medium tracking-wide uppercase">
                    Driver Portal
                </p>
            </div>
            <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                    <label
                        className="mb-2 block text-sm font-medium text-blue-100"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <div className="relative group">
                        <input
                            className="peer block w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 text-sm text-white placeholder:text-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-200/70 transition-colors peer-focus:text-blue-400" />
                    </div>
                </div>
                <div>
                    <label
                        className="mb-2 block text-sm font-medium text-blue-100"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative group">
                        <input
                            className="peer block w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 text-sm text-white placeholder:text-white/40 focus:border-blue-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-200/70 transition-colors peer-focus:text-blue-400" />
                    </div>
                </div>
                <input type='hidden' name='redirectTo' value={callbackUrl} />
                <Button className="w-full justify-center mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-200" disabled={isPending}>
                    Log in <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <div
                    className='flex h-8 items-end space-x-1 justify-center'
                    aria-live='polite'
                    aria-atomic='true'
                >
                    {
                        errorMessage && (
                            <>
                                <ExclamationCircleIcon className='h-5 w-5 text-red-400' />
                                <p className='text-sm text-red-400'>{errorMessage}</p>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
}
