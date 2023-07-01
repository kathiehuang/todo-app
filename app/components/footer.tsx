'use client'

import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer >
            <div className="mx-auto w-full max-w-7xl px-8 border-t border-stone-500 border-opacity-30 mt-4">
                <div className="bottom-0 flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-stone-800 md:mb-0 font-mono opacity-60"
                    >
                        &copy; {currentYear} <a href="mailto: kathiehuang@hotmail.com" target="_blank" className="hover:opacity-100 hover:text-teal-800 transition-opacity">Kathie Huang</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="mailto: kathiehuang@hotmail.com" target="_blank" className="opacity-80 transition-opacity hover:opacity-100  hover:text-teal-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://www.linkedin.com/in/kathie-huang" target="_blank" className="opacity-80 transition-opacity hover:opacity-100  hover:text-teal-800">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://github.com/kathiehuang" target="_blank" className="opacity-80 transition-opacity hover:opacity-100  hover:text-teal-800">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://open.spotify.com/user/1233633660?si=e5cb7cf939d04f5b" target="_blank" className="opacity-80 transition-opacity hover:opacity-100  hover:text-teal-800">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm4.87 17.66c-.2 0-.33-.06-.51-.18a12.03 12.03 0 0 0-6.2-1.6c-1.3 0-2.59.16-3.8.42-.19.04-.44.11-.59.11a.75.75 0 0 1-.75-.75c0-.5.29-.75.65-.82 1.48-.34 2.96-.53 4.49-.53 2.62 0 4.97.6 6.98 1.8.3.18.47.36.47.8 0 .43-.35.75-.74.75zm1.3-3.17c-.25 0-.42-.1-.6-.21a15.22 15.22 0 0 0-7.62-1.93c-1.51 0-2.83.21-3.91.5-.24.07-.37.14-.59.14a.94.94 0 0 1-.93-.95c0-.5.24-.86.74-1C6.61 10.67 8 10.4 10 10.4c3.15 0 6.18.78 8.57 2.2.4.24.55.53.55.96 0 .52-.41.94-.93.94zm1.5-3.7c-.25 0-.4-.06-.62-.18-2.18-1.3-5.55-2.02-8.8-2.02-1.63 0-3.29.16-4.8.57-.17.05-.4.14-.62.14-.64 0-1.13-.51-1.13-1.15 0-.65.4-1.02.84-1.15 1.71-.5 3.62-.74 5.7-.74 3.52 0 7.23.73 9.94 2.32.36.2.62.52.62 1.09 0 .65-.53 1.12-1.14 1.12z" />
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://instagram.com/kathiehuangg" target="_blank" className="opacity-80 transition-opacity hover:opacity-100  hover:text-teal-800">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}