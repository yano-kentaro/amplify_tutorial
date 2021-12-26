import { createApp } from 'vue'
import App from './App.vue'
import Amplify, * as AmplifyModules from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

let languageDict = {
  ja:{
      'Sign in to your account' : 'アカウントにサインイン',
      'Username *' : 'ユーザ名',
      'Username' : 'ユーザ名',
      'Enter your username' : 'ユーザ名を入力してください',
      'Password *' : 'パスワード',
      'Password' : 'パスワード',
      'Email Address *': 'メールアドレス',
      'Phone Number *': '電話番号',
      'Enter your password' : 'パスワードを入力してください',
      'Forgot your password?' : 'パスワードを忘れた場合',
      'Reset password' : 'パスワードのリセット',
      'No account?' : 'アカウントがない場合',
      'Create account' : 'アカウント作成',
      'Sign In' : 'サインイン',
      'Create a new account': 'アカウント新規作成',
      'Have an account?': 'アカウントがある場合',
      'Sign in': 'サインイン',
      'Create Account': 'アカウント作成',
      'Reset your password': 'アカウントリセット',
      'Back to Sign In': 'サインイン画面へ',
      'Send Code': 'コード送信'
  }
}
AmplifyModules.I18n.putVocabularies(languageDict)

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
})

createApp(App).mount('#app')
