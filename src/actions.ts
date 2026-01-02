export const handleForgottenPassword = async (
    _previousState: unknown,
    formData: FormData,
): Promise<string> => formData.get("email") as string;
