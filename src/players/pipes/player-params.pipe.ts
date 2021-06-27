import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class PlayersValidationParamsPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) throw new BadRequestException(`invalid value ${metadata.data}`)

        return value
    }
}