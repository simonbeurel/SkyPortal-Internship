import Image from 'next/image'
import DataShow from "@/app/components/DataShow";
import 'bootstrap/dist/css/bootstrap.min.css';

// This page will be the home page, where we will call the DataShow component with a random number

export default function Home() {
  return (
    <main>
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white">
                    <img src="https://imgs.search.brave.com/HPorcv6e7WXHcRjDG46V8XPJNe2Sp73oI4DHxdSmZmQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9za3lw/b3J0YWwuaW8vc3Rh/dGljL3NreXBvcnRh/bF9sb2dvLnBuZw" width="30" height="24" className="d-inline-block align-text-top"/>
                    SkyPortal - Internship Project
                </a>
            </div>
        </nav>
        <DataShow randomParam={Math.random()}/>
    </main>
  )
}
