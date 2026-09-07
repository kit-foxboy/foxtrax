// Centralized app navigation so route targets live in one place and aren't tied to any single feature.
export function useNavigation() {
  return {
    goToHome: () => navigateTo("/"),
    goToLogin: () => navigateTo("/auth/login"),
    goToDashboard: () => navigateTo("/dashboard"),
  };
}
