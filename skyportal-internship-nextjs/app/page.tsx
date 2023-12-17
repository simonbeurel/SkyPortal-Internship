import Image from 'next/image'
import DataShow from "@/app/components/DataShow";
import 'bootstrap/dist/css/bootstrap.min.css';

// This page will be the home page, where we will call the DataShow component with a random number

export default function Home() {
  return (
    <main>
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    <img src="/app/skyportal_logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    SkyPortal - Internship Project
                </a>
            </div>
        </nav>
        <DataShow randomParam={Math.random()}/>
    </main>
  )
}
