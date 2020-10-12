import { CreateSectionDto, UpdateSectionDto } from '../dtos';
import { ISection } from './section.interface';

export interface ISectionService {
  findAll(): Promise<ISection[]>;
  findById(sectionId: string): Promise<ISection | null>;
  findOne(options: object): Promise<ISection | null>;
  create(section: CreateSectionDto[]): Promise<ISection>;
  update(
    sectionId: string,
    newSection: UpdateSectionDto,
  ): Promise<ISection | null>;
  delete(sectionId: string): Promise<string>;
}
