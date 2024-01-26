import Link from "next/link"
import Image from "next/image"

export function App() {
  return (
    <div key="1" className="dark flex flex-col min-h-screen bg-gray-900">
      <main className="flex-1 py-10 px-4 bg-gray-800 bg-opacity-50">
        <section className="container mx-auto space-y-6 text-center" id="about">
          <div className="mx-auto max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-100">Victor Assis</h1>
            <p className="text-gray-400 mt-4">
              I am a computational biology researcher and computer engineering undergraduate student at Insper, Brazil.
              My work focuses on developing computational models to understand biological systems and tools to help
              researchers in their own work.
            </p>
            <p className="text-gray-400 mt-4">
              Currently, I am engaged as a remote research intern at the University of Cincinnati College of Medicine,
              under the supervision of Lucas Bulgarelli and Dr. Rodrigo Deliberato. My research interests span
              single-cell omics, machine learning, and drug discovery.
            </p>
            {/* <p className="text-gray-400 mt-4">
              This summer, I am excited to participate in the University of Illinois, Urbana-Champaign's summer research
              program. My academic and career ambitions are centered on enrolling in a Computational Biology doctoral
              program in the USA by Fall 2026 and eventually pursuing a career as a biotech entrepreneur.
            </p> */}
            <p className="text-gray-400 mt-4">
              Previously, I served as a Product & Data Analyst at ADDI, a Colombian BNPL startup backed by Andreessen Horowitz.
              I also co-founded Cowala, a software company where my college friends and I offered software development services.
            </p>
            <p className="text-gray-400 mt-4">
            If you're interested in my work or would like to connect, please don't hesitate to reach out to me at
            victor.assis@hey.com or through the mail icon below.
            </p>
            <Image
              alt="Victor Assis"
              className="mt-8 mx-auto w-48 h-48 object-cover rounded-full border-4 border-gray-700"
              height={200}
              src="/profilePicture.png"
              width={200}
            />
            <div className="flex justify-center space-x-4 mt-8">
              <Link className="text-gray-400 hover:text-gray-300" href="https://world.hey.com/victor.assis/">
                <TextIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="https://github.com/victorlga">
                <GithubIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="https://www.linkedin.com/in/victorlga/">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="mailto:victor.assis@hey.com">
                <MailIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 bg-gray-800 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-gray-400">© 2024 Victor Assis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

type IconProps = React.SVGProps<SVGSVGElement>;

function TextIcon(props: IconProps) {
  return (
<svg fill="#CCCCCC" height="30" width="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" stroke="#CCCCCC">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <path d="M421.578,190.264l-99.847-99.847c-2.439-2.439-6.391-2.439-8.829,0L82.824,320.495c-2.439,2.439-2.439,6.392,0,8.829 l99.847,99.847c2.439,2.439,6.391,2.439,8.829,0l230.078-230.078C424.017,196.655,424.017,192.703,421.578,190.264z"/> </g> </g> <g> <g> <path d="M506.511,87.672L424.323,5.484c-7.308-7.31-19.175-7.315-26.488,0l-49.616,49.616c-2.439,2.439-2.439,6.391,0,8.829 l99.847,99.847c2.439,2.437,6.391,2.437,8.829,0l49.616-49.616C513.826,106.847,513.826,94.987,506.511,87.672z"/> </g> </g> <g> <g> <path d="M508.133,491.11c-1.054-9.556-9.489-16.599-19.104-16.599H111.633l36.058-15.163c4.088-1.719,5.131-7.034,1.994-10.17 l-86.854-86.854c-3.137-3.135-8.451-2.094-10.17,1.994C52.224,365.359,2.052,484.66,1.627,485.707 c-5.815,13.208,4.855,27.01,18.107,26.263H489.52C500.566,511.97,509.379,502.408,508.133,491.11z"/> </g> </g> </g>

</svg>
    )
}


function GithubIcon(props: IconProps) {
  return (
    <svg fill="#CCCCCC" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>github</title>
    <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path>
    </svg>
  )
}


function LinkedinIcon(props: IconProps) {
  return (
    <svg fill="#CCCCCC" width="30" height="30" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><path d="m5.706 7.798v16.202h-5.395v-16.202zm.343-5.002c.001.029.002.063.002.098 0 .749-.318 1.423-.826 1.895l-.002.001c-.545.498-1.274.803-2.075.803-.049 0-.099-.001-.148-.003h.007-.033c-.041.002-.089.003-.137.003-.784 0-1.496-.306-2.025-.804l.001.001c-.504-.488-.816-1.17-.816-1.925 0-.024 0-.048.001-.073v.004c-.001-.021-.001-.045-.001-.069 0-.762.324-1.448.841-1.929l.002-.001c.544-.495 1.271-.799 2.068-.799.046 0 .091.001.137.003h-.006c.043-.002.092-.003.143-.003.785 0 1.5.303 2.034.798l-.002-.002c.515.497.835 1.193.835 1.964v.042-.002zm19.062 11.92v9.284h-5.378v-8.665c.005-.079.007-.171.007-.263 0-.896-.249-1.733-.682-2.447l.012.021c-.427-.596-1.117-.979-1.896-.979-.06 0-.12.002-.18.007h.008c-.027-.001-.058-.002-.089-.002-.62 0-1.19.213-1.641.57l.006-.004c-.453.367-.808.836-1.032 1.375l-.008.023c-.116.355-.182.763-.182 1.187 0 .048.001.096.003.144v-.007 9.042h-5.378q.033-6.523.033-10.578t-.016-4.839l-.016-.785h5.378v2.354h-.033c.214-.345.435-.644.678-.924l-.008.009c.281-.309.583-.588.908-.838l.016-.012c.404-.311.878-.555 1.392-.704l.03-.007c.538-.161 1.157-.254 1.797-.254h.079-.004c.071-.003.154-.005.237-.005 1.681 0 3.195.714 4.256 1.856l.003.004q1.702 1.856 1.702 5.436z"/></svg>
  )
}


function MailIcon(props: IconProps) {
  return (
    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#CCCCCC">
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    <g id="SVGRepo_iconCarrier"> <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
    </svg>
  )
}
