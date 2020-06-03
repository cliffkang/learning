export class CounterService {
    count = 0;

    onNewChange() {
        ++this.count;
        console.log('Current count is: ', this.count);
    }
}