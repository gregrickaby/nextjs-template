import config from '@/functions/config'

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono grid gap-y-3">
      <hr />
      <p>
        website by{' '}
        <a href={config?.authorUrl} rel="noopener">
          {config?.siteAuthor}
        </a>
      </p>
      <small>
        &copy; {new Date().getFullYear()} &middot; Powered by{' '}
        <a href="https://nextjs.org">Next.js</a>
      </small>
    </footer>
  )
}
