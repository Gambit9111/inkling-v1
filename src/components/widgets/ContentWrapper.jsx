const ContentWrapper = ({ children }) => {
  return (
    <main className="flex flex-col items-center gap-10 relative h-screen">
      {children}
    </main>
  );
};

export default ContentWrapper;
