import { MessageService } from './message.service';
import { Services } from '@angular/core/src/view';


describe('MessageService', () => {

  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no messages to start', () => {
    expect(service.messages.length).toBe(0);
  })

  it('should add a message when add is called', () => {
    service.add('test');
    expect(service.messages.length).toBe(1);
  })

  it('should remove all messages when clear is called', () => {

    service.add('test 1');
    service.add('test 2');

    service.clear();

    expect(service.messages.length).toBe(0);

  })
})
