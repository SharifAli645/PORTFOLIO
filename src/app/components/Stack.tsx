import Image from "next/image";
import python from '../../icons/stack/python.png'
import react from '../../icons/stack/react.png'
import js from '../../icons/stack/js.png'
import html from '../../icons/stack/html.png'
import django from '../../icons/stack/django.png'
import css from '../../icons/stack/css.png'


function StackItem({item}) {
    return (
        <div className="flex flex-col justify-center items-center px-5 gap-3 hover:bg-yellow-500 cursor-default my-3 rounded-2xl">
            <div>
                <Image
                    src={item.url}
                    alt="python" width={50} height={50}
                />
            </div>
            <p className="font-bold uppercase">{item.name}</p>
        </div>
    );
}

export default function Stack() {

    const stack = [
        { url: python, name: 'python' },
        { url: js, name: 'javascript' },
        { url: react, name: 'react' },
        { url: django, name: 'django' },
        { url: html, name: 'html' },
        { url: css, name: 'css' }
    ];
    return (
        <div className='flex flex-[4] flex-col px-36 gap-3 py-3 mb-16'>
            <div className='flex flex-[1] text-black font-bold items-center'>
                <p className='bg-green-300 p-2 rounded-lg text-xl'>Tecnologías</p>
            </div>
            <div className='bg-green-500 flex flex-[4] rounded-lg justify-around'>
                {stack.map((item, index) => <StackItem item={item} key={index}/>)}
            </div>
        </div>
    )
}
