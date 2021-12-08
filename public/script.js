const url = '/api/v1/products'

const fileFormDOm = document.querySelector('.file-form')

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')

const container = document.querySelector('.container')
let imageValue

imageInput.addEventListener("change", async (e) => {
    const imageFile = e.target.files[0]
    const formData = new FormData()
    formData.append("image", imageFile)
    // console.log([...formData.values()]);

    try {
        const {
            data:{
                image: {
                    src
                }
            }
        } = await axios.post(`${url}/uploads`, formData, {
            headers: {
                "Content-Type": "multipart/formData"
            }
        })
        imageValue = src
    } catch (err) {
        imageValue = null
        console.log(err);
    }
})

document.querySelector('#reset').addEventListener('click', async(e) => {

    // e.preventDefault()
    console.log('test');
    const response = await axios.get("/reset")
    console.log(response);
})  