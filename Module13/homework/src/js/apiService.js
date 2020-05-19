const baseUrl =
  'https://pixabay.com/api/?key=16586692-805de439588b17aa1d0d1f1cd';

export default {
  page: 1,
  query: '',
  fetchImg() {
    return fetch(
      `${baseUrl}&q=${this.request}&image_type=photo&per_page=12&page=${this.page}`,
    )
      .then(response => {
        this.incrementPage();
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  },
  get searchRequest() {
    return this.request;
  },
  set searchRequest(string) {
    this.request = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
