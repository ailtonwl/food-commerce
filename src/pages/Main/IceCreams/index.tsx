import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function IceCreams() {

  const { iceCreams } = useSnack()

  return (
    <>
      <Head title='Sobremesas' />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  )
}
