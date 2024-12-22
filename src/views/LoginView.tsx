import { VStack } from "@components/FlexBoxGroup"
import Input from "@src/components/Input/Input"
import Typography from "@src/components/Typography/Typograpy"
import useLogin from "@hooks/useLogin"
import Button from "@src/components/Button/Button"

export default function LoginView() {
  const { id, password, loginMutate, handleIdChange, handlePasswordChange } =
    useLogin()

  return (
    <VStack bg="tertiary" width="100vw" height="100vh">
      <VStack justifyContent="center" alignItems="center" flexGrow={1}>
        <VStack gap={32} width="400px">
          <Typography variant="h2" textAlign="center">
            로그인
          </Typography>
          <VStack gap={8}>
            <Typography variant="body-m">로그인</Typography>
            <Input
              value={id}
              onChange={handleIdChange}
              palceholder="아이디 입력"
            />
          </VStack>
          <VStack gap={8}>
            <Typography variant="body-m">비밀번호</Typography>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              palceholder="비밀번호 입력"
            />
          </VStack>

          <Button
            title="로그인"
            onClick={() => loginMutate()}
            disabled={!id || !password}
          />
        </VStack>
      </VStack>
    </VStack>
  )
}
