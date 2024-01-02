const PrintMenu = () => {
    return (
        <div className="page-hidden text-sm font-inter fixed w-full text-center bg-white/10 text-neutral-800 dark:bg-neutral-800 dark:text-white py-2 font-medium bottom-0 border rounded-t-md backdrop-blur-md">
            Press{" "}
            <code className="bg-neutral-200 font-mono font-medium px-2 py-1 rounded-md">
                CTRL + P
            </code>{" "}
            or{" "}
            <code className="bg-neutral-200 font-mono font-medium px-2 py-1 rounded-md">
                ⌘ + P
            </code>{" "}
            or{" "}
            <button
                className="underline hover:text-neutral-800/80"
                onClick={() => window.print()}
            >
                click here
            </button>{" "}
            to print
        </div>
    );
};

export default PrintMenu;
