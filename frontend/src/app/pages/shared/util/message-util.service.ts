import {Injectable} from "@angular/core";
import {MessageService} from "primeng";

@Injectable({providedIn: "root"})
export class MessageUtilService {

    constructor(private messageService: MessageService) {}

    showErrorToaster(summary: string, detail: string): void {
        this.messageService.add({severity: 'error', detail, summary});
    }

    showSuccessToaster(summary: string, detail: string): void {
        this.messageService.add({severity: 'success', detail, summary});
    }

    showWarnToaster(summary: string, detail: string): void {
        this.messageService.add({severity: 'warn', detail, summary});
    }
}
