import WhiskyList from '@/components/WhiskyList/WhiskyList';

// This is your public page
export default async function Home() {
  // Fetch whiskies
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/whiskies`);
  const whiskies = await response.json();

  return (
    <main>
      <WhiskyList whiskies={whiskies} />
    </main>
  );
}