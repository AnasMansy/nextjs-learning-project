export const metadata = {
    title: "Articles Layout",
    description: "This is the articles layout page"}
export default function  ({children}) {
  return (
    <div className="page bg-gray-100">
      test article layout
      <div>
      {children}
      </div>
    </div>
  );
}