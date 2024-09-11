export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="p-8 text-center text-gold">&copy; {year} Atlas School</div>
  );
}
