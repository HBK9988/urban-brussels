const PageSwitch = {
  displaySwitch: (container) => {
    document.getElementsByClassName(container)[0].innerHTML = `
    <div class="btn-switch">
      <button class="btn__list">
      <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.0098 28.3319H11.0094C5.39503 28.3319 0.85 32.877 0.85 38.4913C0.85 44.1056 5.39503 48.6507 11.0094 48.6507C16.6237 48.6507 21.1687 44.1056 21.1687 38.4913L21.1687 38.4908C21.1509 32.8944 16.6062 28.3498 11.0098 28.3319ZM11.009 44.8386C7.50946 44.8384 4.66206 42.0079 4.66206 38.4913C4.66206 34.9916 7.49261 32.144 11.0094 32.144C14.509 32.144 17.3565 34.9744 17.3567 38.491C17.3393 41.9907 14.5087 44.8212 11.009 44.8386Z" class="list__fill list__stroke" />
        <path d="M72.3176 30.7915H26.2426C25.5172 30.7915 24.8414 31.0211 24.3371 31.4122C23.8326 31.8035 23.4784 32.3778 23.4784 33.0475C23.4784 33.7172 23.8326 34.2915 24.3371 34.6828C24.8414 35.074 25.5172 35.3036 26.2426 35.3036H72.3176C73.0429 35.3036 73.7187 35.074 74.2231 34.6828C74.7276 34.2915 75.0817 33.7172 75.0817 33.0475C75.0817 32.3778 74.7276 31.8035 74.2231 31.4122C73.7187 31.0211 73.0429 30.7915 72.3176 30.7915Z" class="list__fill"/>
        <path d="M51.0574 41.6787H26.2426C25.5172 41.6787 24.8414 41.9083 24.3371 42.2994C23.8326 42.6908 23.4784 43.2651 23.4784 43.9347C23.4784 45.2847 24.8206 46.1908 26.2426 46.1908H51.0574C51.7827 46.1908 52.4585 45.9612 52.9629 45.57C53.4674 45.1787 53.8215 44.6044 53.8215 43.9347C53.8215 43.2651 53.4674 42.6908 52.9629 42.2994C52.4585 41.9083 51.7827 41.6787 51.0574 41.6787Z" class="list__fill"/>
        <path d="M21.1687 11.0094L21.1687 11.0089C21.1509 5.39519 16.6064 0.85 11.0094 0.85C5.39503 0.85 0.85 5.39503 0.85 11.0094C0.85 16.6237 5.39503 21.1687 11.0094 21.1687C16.6237 21.1687 21.1687 16.6237 21.1687 11.0094ZM11.0094 17.3391C7.50965 17.3391 4.66206 14.5086 4.66206 10.9918C4.66206 7.47479 7.49235 4.6445 11.0094 4.6445C14.509 4.6445 17.3565 7.47487 17.3567 10.9915C17.3393 14.5093 14.5083 17.3391 11.0094 17.3391Z" class="list__fill list__stroke"/>
        <path d="M72.2998 3.5H25.8636C25.1517 3.5 24.4829 3.69049 23.9774 4.02281C23.4768 4.35185 23.0817 4.8637 23.0817 5.5C23.0817 6.1363 23.4768 6.64815 23.9774 6.97719C24.4829 7.30951 25.1517 7.5 25.8636 7.5H72.2998C73.0117 7.5 73.6805 7.30951 74.1861 6.97719C74.6866 6.64815 75.0817 6.1363 75.0817 5.5C75.0817 4.8637 74.6866 4.35185 74.1861 4.02281C73.6805 3.69049 73.0117 3.5 72.2998 3.5Z" class="list__fill"/>
        <path d="M51.0574 14.2847H26.2426C25.5172 14.2847 24.8414 14.5142 24.3371 14.9054C23.8326 15.2967 23.4784 15.871 23.4784 16.5407C23.4784 17.8907 24.8206 18.7967 26.2426 18.7967H51.0574C51.7827 18.7967 52.4585 18.5672 52.9629 18.176C53.4674 17.7847 53.8215 17.2104 53.8215 16.5407C53.8215 15.871 53.4674 15.2967 52.9629 14.9054C52.4585 14.5142 51.7827 14.2847 51.0574 14.2847Z" class="list__fill"/>
        <path d="M21.1687 65.9908L21.1687 65.9903C21.1509 60.3766 16.6064 55.8314 11.0094 55.8314C5.39503 55.8314 0.85 60.3765 0.85 65.9908C0.85 71.6051 5.39503 76.1502 11.0094 76.1502C16.6237 76.1502 21.1687 71.6051 21.1687 65.9908ZM11.0094 72.3206C7.50965 72.3206 4.66206 69.49 4.66206 65.9733C4.66206 62.4735 7.49261 59.6259 11.0094 59.6259C14.509 59.6259 17.3565 62.4563 17.3567 65.9729C17.3393 69.4907 14.5083 72.3206 11.0094 72.3206Z" class="list__fill list__stroke"/>
        <path d="M72.3176 58.1855H26.2426C25.5172 58.1855 24.8414 58.4151 24.3371 58.8063C23.8326 59.1976 23.4784 59.7719 23.4784 60.4416C23.4784 61.1113 23.8326 61.6856 24.3371 62.0769C24.8414 62.468 25.5172 62.6976 26.2426 62.6976H72.3176C73.0429 62.6976 73.7187 62.468 74.2231 62.0769C74.7276 61.6856 75.0817 61.1113 75.0817 60.4416C75.0817 59.7719 74.7276 59.1976 74.2231 58.8063C73.7187 58.4151 73.0429 58.1855 72.3176 58.1855Z" class="list__fill"/>
        <path d="M51.0574 69.2485H26.2426C25.5172 69.2485 24.8414 69.4781 24.3371 69.8693C23.8326 70.2606 23.4784 70.8349 23.4784 71.5046C23.4784 72.1743 23.8326 72.7486 24.3371 73.1399C24.8414 73.531 25.5172 73.7606 26.2426 73.7606H51.0574C51.7827 73.7606 52.4585 73.531 52.9629 73.1399C53.4674 72.7486 53.8215 72.1743 53.8215 71.5046C53.8215 70.8349 53.4674 70.2606 52.9629 69.8693C52.4585 69.4781 51.7827 69.2485 51.0574 69.2485Z" class="list__fill"/>
      </svg>
      
      </button>
      <button class="btn__dashboard">
      <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4951 39.4189H2C0.895508 39.4189 0 40.3145 0 41.4189V77.1992C0 78.3037 0.895508 79.1992 2 79.1992H12.4951C13.5996 79.1992 14.4951 78.3037 14.4951 77.1992V41.4189C14.4951 40.3145 13.5996 39.4189 12.4951 39.4189ZM10.4951 75.1992H4V43.4189H10.4951V75.1992Z" class="dashboard__fill"/>
        <path d="M29.6143 50.8018H19.1191C18.0146 50.8018 17.1191 51.6973 17.1191 52.8018V77.1992C17.1191 78.3037 18.0146 79.1992 19.1191 79.1992H29.6143C30.7188 79.1992 31.6143 78.3037 31.6143 77.1992V52.8018C31.6143 51.6973 30.7188 50.8018 29.6143 50.8018ZM27.6143 75.1992H21.1191V54.8018H27.6143V75.1992Z" class="dashboard__fill"/>
        <path d="M46.7334 33.1621H36.2383C35.1338 33.1621 34.2383 34.0576 34.2383 35.1621V77.1992C34.2383 78.3037 35.1338 79.1992 36.2383 79.1992H46.7334C47.8379 79.1992 48.7334 78.3037 48.7334 77.1992V35.1621C48.7334 34.0576 47.8379 33.1621 46.7334 33.1621ZM44.7334 75.1992H38.2383V37.1621H44.7334V75.1992Z" class="dashboard__fill"/>
        <path d="M63.8525 39.4189H53.3574C52.2529 39.4189 51.3574 40.3145 51.3574 41.4189V77.1992C51.3574 78.3037 52.2529 79.1992 53.3574 79.1992H63.8525C64.957 79.1992 65.8525 78.3037 65.8525 77.1992V41.4189C65.8525 40.3145 64.957 39.4189 63.8525 39.4189ZM61.8525 75.1992H55.3574V43.4189H61.8525V75.1992Z" class="dashboard__fill""/>
        <path d="M80.9717 20.2461H70.4771C69.3726 20.2461 68.4771 21.1416 68.4771 22.2461V77.1992C68.4771 78.3037 69.3726 79.1992 70.4771 79.1992H80.9717C82.0762 79.1992 82.9717 78.3037 82.9717 77.1992V22.2461C82.9717 21.1416 82.0762 20.2461 80.9717 20.2461ZM78.9717 75.1992H72.4771V24.2461H78.9717V75.1992Z" class="dashboard__fill"/>
        <path d="M7.21973 31.6865C8.66034 31.6865 9.98639 31.2008 11.0554 30.3922L18.4235 35.5178C18.3553 35.8909 18.3145 36.2735 18.3145 36.666C18.3145 40.1826 21.1758 43.0439 24.6934 43.0439C28.2104 43.0439 31.0718 40.1826 31.0718 36.666C31.0718 35.6039 30.8073 34.6038 30.3462 33.722L39.5109 23.5286C40.3208 23.9015 41.2184 24.1152 42.167 24.1152C44.2234 24.1152 46.0505 23.1328 47.2177 21.6171L52.2961 23.8932C52.2961 23.895 52.2959 23.8967 52.2959 23.8984C52.2959 27.415 55.1572 30.2764 58.6743 30.2764C62.1919 30.2764 65.0532 27.415 65.0532 23.8984C65.0532 22.9128 64.822 21.9825 64.4213 21.1484L73.9335 11.9001C74.871 12.4423 75.9554 12.7578 77.1143 12.7578C80.6318 12.7578 83.4932 9.89648 83.4932 6.37891C83.4932 2.86133 80.6318 0 77.1143 0C73.5967 0 70.7354 2.86133 70.7354 6.37891C70.7354 7.28082 70.9259 8.13824 71.265 8.91669L61.6531 18.2619C60.7631 17.7897 59.7501 17.5195 58.6743 17.5195C56.5887 17.5195 54.7394 18.5302 53.5749 20.0828L48.5408 17.8267C48.5413 17.7963 48.5454 17.7668 48.5454 17.7363C48.5454 14.2188 45.6841 11.3574 42.167 11.3574C38.6494 11.3574 35.7881 14.2188 35.7881 17.7363C35.7881 18.8492 36.0759 19.8955 36.579 20.8073L27.4742 30.9341C26.6323 30.5239 25.6911 30.2871 24.6934 30.2871C23.0212 30.2871 21.5021 30.9388 20.3634 31.9951L13.3357 27.1063C13.504 26.5352 13.5981 25.9326 13.5981 25.3076C13.5981 21.791 10.7368 18.9297 7.21973 18.9297C3.70215 18.9297 0.84082 21.791 0.84082 25.3076C0.84082 28.8252 3.70215 31.6865 7.21973 31.6865ZM77.1143 4C78.4258 4 79.4932 5.06738 79.4932 6.37891C79.4932 7.69043 78.4258 8.75781 77.1143 8.75781C75.8027 8.75781 74.7354 7.69043 74.7354 6.37891C74.7354 5.06738 75.8027 4 77.1143 4ZM58.6743 21.5195C59.9858 21.5195 61.0532 22.5869 61.0532 23.8984C61.0532 25.21 59.9858 26.2764 58.6743 26.2764C57.3628 26.2764 56.2959 25.21 56.2959 23.8984C56.2959 22.5869 57.3628 21.5195 58.6743 21.5195ZM42.167 15.3574C43.4785 15.3574 44.5454 16.4248 44.5454 17.7363C44.5454 19.0479 43.4785 20.1152 42.167 20.1152C41.5206 20.1152 40.9351 19.8542 40.5059 19.4343C40.5053 19.4338 40.5049 19.4331 40.5044 19.4326C40.5031 19.4314 40.5015 19.4307 40.5001 19.4295C40.0616 18.9977 39.7881 18.3988 39.7881 17.7363C39.7881 16.4248 40.8555 15.3574 42.167 15.3574ZM24.6934 34.2871C26.0049 34.2871 27.0718 35.3545 27.0718 36.666C27.0718 37.9775 26.0049 39.0439 24.6934 39.0439C23.3818 39.0439 22.3145 37.9775 22.3145 36.666C22.3145 35.3545 23.3818 34.2871 24.6934 34.2871ZM7.21973 22.9297C8.53125 22.9297 9.59814 23.9961 9.59814 25.3076C9.59814 26.6191 8.53125 27.6865 7.21973 27.6865C5.9082 27.6865 4.84082 26.6191 4.84082 25.3076C4.84082 23.9961 5.9082 22.9297 7.21973 22.9297Z" class="dashboard__fill"/>
      </svg>
      
      </button>
    </div>`
  },
  clickHandlerBtn: () => {
    const btnList = document.querySelector('.btn__list')
    const btnDashboard = document.querySelector('.btn__dashboard')
    if (window.location.hash === '#/list') {
      btnList.classList.add('is--disabled')
      btnDashboard.classList.add('dashboard--enabled')
      btnList.setAttribute('disabled', true)
    } else {
      btnList.classList.add('list--enabled')
      btnDashboard.classList.add('is--disabled')
      btnDashboard.setAttribute('disabled', true)
    }

    btnList.addEventListener('click', () => {
      window.location.href = '/#/list'
    })
    btnDashboard.addEventListener('click', () => {
      window.location.href = '/#/dashboard'
    })
  }
}
export default PageSwitch
