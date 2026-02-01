const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center opacity-50">
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-glass-light"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40 bg-glass-light"></div>
          <div className="skeleton h-4 w-40 bg-glass-light"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end opacity-50">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40 bg-glass-light"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0 bg-glass-light"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
