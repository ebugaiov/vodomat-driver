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
        <div className="flex min-h-screen flex-col items-center justify-center px-6">
            <div className="w-full max-w-md rounded-lg border-l-4 border-blue-500 bg-white/60 p-8 shadow-xl backdrop-blur-md">
                <div className="mb-6 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 md:text-6xl">
                        Vodomat
                    </h1>
                    <p className="mt-1 text-xl text-gray-500">
                        Driver
                    </p>
                </div>
                <form ref={formRef} action={formAction} className="space-y-6">
                    <div>
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-300 bg-white py-3 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                id="username"
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-2 block text-sm font-medium text-gray-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-300 bg-white py-3 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 peer-focus:text-blue-500" />
                        </div>
                    </div>
                    <input type='hidden' name='redirectTo' value={callbackUrl} />
                    <Button className="w-full justify-center mt-4" disabled={isPending}>
                        Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                    </Button>
                    <div
                        className='flex h-8 items-end space-x-1'
                        aria-live='polite'
                        aria-atomic='true'
                    >
                        {
                            errorMessage && (
                                <>
                                    <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                                    <p className='text-sm text-red-500'>{errorMessage}</p>
                                </>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}
