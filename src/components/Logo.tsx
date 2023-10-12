export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    // <svg aria-hidden="true" viewBox="0 0 109 40" {...props}>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
    //     fill="#2563EB"
    //   />
    //   <path
    //     d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
    //     fill="#0F172A"
    //   />
    //   <path
    //     d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
    //     fill="#2563EB"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
    //     fill="#2563EB"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
    //     fill="#0F172A"
    //   />
    // </svg>

    <svg viewBox="0 0 93 24" aria-hidden="true" {...props}>
        <path fill="#2563EB" opacity="1" d="M16.5 7.5h-9v9h9v-9Z"/>
        <path fill="#2563EB" opacity="0.7" fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 1 1 1.5 0v.75H15V3a.75.75 0 1 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 1 1 21 9h-.75v2.25H21a.75.75 0 1 1 0 1.5h-.75V15H21a.75.75 0 1 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 1 1-1.5 0v-.75h-2.25V21a.75.75 0 1 1-1.5 0v-.75H9V21a.75.75 0 1 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 1 1 3 15h.75v-2.25H3a.75.75 0 1 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd"/>
        <path fill="#2563EB" d="M28.638 19V6.4h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106A4 4 0 0 1 36 14.05c-.6.36-1.272.54-2.016.54h-2.646V19h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM40.038 19V9.478h2.466l.09 3.06-.432-.63c.144-.492.378-.936.702-1.332a3.57 3.57 0 0 1 1.134-.954 2.997 2.997 0 0 1 1.386-.342c.204 0 .402.018.594.054.192.036.354.078.486.126l-.684 2.808a2.403 2.403 0 0 0-.522-.18 2.221 2.221 0 0 0-.63-.09c-.288 0-.558.054-.81.162-.24.096-.45.24-.63.432-.18.18-.324.396-.432.648a2.308 2.308 0 0 0-.144.828V19h-2.574Zm11.916.18c-.972 0-1.842-.21-2.61-.63a4.881 4.881 0 0 1-1.8-1.764c-.432-.744-.648-1.596-.648-2.556s.216-1.806.648-2.538a4.881 4.881 0 0 1 1.8-1.764c.768-.432 1.638-.648 2.61-.648.96 0 1.818.216 2.574.648a4.708 4.708 0 0 1 1.8 1.764c.432.732.648 1.578.648 2.538 0 .96-.216 1.812-.648 2.556a4.708 4.708 0 0 1-1.8 1.764c-.756.42-1.614.63-2.574.63Zm0-2.232c.468 0 .888-.114 1.26-.342.372-.24.66-.564.864-.972.216-.42.324-.888.324-1.404 0-.528-.108-.996-.324-1.404a2.274 2.274 0 0 0-.864-.972 2.274 2.274 0 0 0-1.26-.36c-.48 0-.906.12-1.278.36s-.666.564-.882.972c-.216.408-.318.876-.306 1.404-.012.516.09.984.306 1.404.216.408.51.732.882.972.372.228.798.342 1.278.342Zm10.671 2.232c-.828 0-1.572-.21-2.232-.63a4.594 4.594 0 0 1-1.566-1.746c-.372-.744-.558-1.602-.558-2.574 0-.948.186-1.794.558-2.538.384-.744.9-1.332 1.548-1.764.66-.432 1.41-.648 2.25-.648.444 0 .87.072 1.278.216.42.132.792.318 1.116.558.336.24.606.51.81.81.204.288.318.594.342.918l-.648.108V5.68h2.556V19h-2.412l-.108-2.196.504.054c-.024.3-.132.588-.324.864s-.45.528-.774.756c-.312.216-.672.39-1.08.522-.396.12-.816.18-1.26.18Zm.576-2.124c.48 0 .9-.12 1.26-.36s.642-.57.846-.99c.204-.42.306-.912.306-1.476 0-.552-.102-1.038-.306-1.458-.204-.432-.486-.762-.846-.99-.36-.24-.78-.36-1.26-.36s-.9.12-1.26.36c-.348.228-.624.558-.828.99-.192.42-.288.906-.288 1.458 0 .564.096 1.056.288 1.476.204.42.48.75.828.99.36.24.78.36 1.26.36ZM70.787 19V9.478h2.556V19h-2.556Zm1.26-11.484c-.492 0-.876-.12-1.152-.36-.276-.24-.414-.582-.414-1.026 0-.408.138-.738.414-.99.288-.264.672-.396 1.152-.396.492 0 .876.126 1.152.378.276.24.414.576.414 1.008 0 .42-.144.756-.432 1.008-.276.252-.654.378-1.134.378ZM76.811 19V8.812c0-.588.132-1.122.396-1.602s.624-.858 1.08-1.134c.468-.276 1.014-.414 1.638-.414.42 0 .816.072 1.188.216.372.132.69.318.954.558l-.756 1.872a2.583 2.583 0 0 0-.486-.234 1.04 1.04 0 0 0-.432-.108c-.228 0-.42.042-.576.126a.693.693 0 0 0-.324.342c-.072.144-.108.33-.108.558V19H76.81Zm-1.422-7.128v-2.16h6.048v2.16h-6.048ZM84.47 23.14l2.088-4.896.036 1.476-4.644-10.242h2.898l2.322 5.49c.096.204.186.444.27.72.096.264.174.522.234.774l-.432.18c.072-.204.156-.438.252-.702.096-.264.192-.546.288-.846l1.998-5.616h2.916L88.701 19l-1.638 4.14h-2.592Z"/>
    </svg>
  )
}