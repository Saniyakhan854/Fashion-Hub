import React from 'react'

export default function Footer() {
  return (
     <footer className="fixed bottom-0 left-0 w-full bg-blue-600 text-white text-center py-4 mt-6">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
  )
}
