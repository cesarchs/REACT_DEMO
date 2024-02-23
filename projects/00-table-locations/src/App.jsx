import './App.css'
export function App(){
    return ( // con el return le decimos lo que tiene que renderizar
        <article className='tw-followCard'>
            <header>
                <img alt="El avatar de Emma Stone" src="https://img.asmedia.epimg.net/resizer/i0AaK6BHE6znTuqRB1Q3ClO7JUA=/1200x1200/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/U6NQADMRARLMVITT7GMKT2XAI4.jpg"/>
                <div>
                    <strong>Emma Stone</strong>
                    <span>@emmastone</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}