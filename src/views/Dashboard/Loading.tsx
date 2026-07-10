import { Spinner } from "#components/ui/spinner";

export default function LoadingDashboard() {
  return (
    <div className='flex-1 w-full p-6 sm:p-8 lg:p-10'>
      <div className='flex h-full flex-col justify-between gap-8'>
        <section className='flex flex-col gap-4'>
          <p className='text-sm font-medium'>Loading</p>
          <div className='space-y-3'>
            <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
              Checking Factorio
            </h1>
            <p className='max-w-2xl text-sm text-muted-foreground sm:text-base'>
              We’re reading your installation and collecting the current mod state so you can continue.
            </p>
          </div>
        </section>

        <section className='flex flex-col gap-4 rounded-lg border p-6'>
          <div className='flex items-center gap-3'>
            <Spinner className='h-6 w-6 text-primary' />
            <div>
              <p className='text-sm font-medium'>Scanning installation</p>
              <p className='text-sm text-muted-foreground'>
                Loading installation data and scanning your mods.
              </p>
            </div>
          </div>

          <p className='text-sm text-muted-foreground'>
            This should only take a moment.
          </p>
        </section>
      </div>
    </div>
  );
}