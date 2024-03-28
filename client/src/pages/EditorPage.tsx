
import ShirtsCollar from 'components/shirt/ShirtsCollar'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useShirtsStore from 'store/shirtsStore'

const EditorPage = () => {
    const { id } = useParams()
    const { shirt, setShirt } = useShirtsStore()

    useEffect(() => {
        setShirt(id)
    }, [id])

  return (
   
       <ShirtsCollar shirt={shirt} />
   
  )
}

export default EditorPage