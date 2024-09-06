export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>Here will be located the Header of the weather dashboard</header>
      
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Here  will be located the main part of the weather dashboard
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div><p>At this position will be located the footer in the future.</p>
      All rights reserved.&#169;
       
        </div>
        
      </footer>
    </div>
  );
}
