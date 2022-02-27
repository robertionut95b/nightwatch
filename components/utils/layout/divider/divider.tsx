export const Divider = ({ content }: { content?: string }): JSX.Element => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-400"></div>
      {content && (
        <span className="flex-shrink mx-4 text-gray-400">{content}</span>
      )}
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};
export default Divider;
