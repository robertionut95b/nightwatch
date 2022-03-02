const Divider = ({ content }: { content?: string }): JSX.Element => {
  return (
    <div className="relative flex items-center py-5">
      <div className="flex-grow border-t border-gray-400"></div>
      {content && (
        <span className="mx-4 flex-shrink text-gray-400">{content}</span>
      )}
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};
export default Divider;
