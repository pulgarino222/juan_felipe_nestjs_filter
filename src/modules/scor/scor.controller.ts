import { Controller, Get, Param } from '@nestjs/common';
import { ScoresService } from '../scor/scor.service';
import { Score } from '../scor/entities/scor.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('scores')
@Controller('scores')
export class ScoresController {
    constructor(private readonly scoresService: ScoresService) {}

    @Get()
    @ApiOperation({ summary: 'Retrieve all scores' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved all scores.' })
    async findAll(): Promise<Score[]> {
        return this.scoresService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Retrieve a score by ID' })
    @ApiResponse({ status: 200, description: 'Successfully retrieved the score.' })
    @ApiResponse({ status: 404, description: 'Score not found.' })
    @ApiParam({ name: 'id', required: true, description: 'Score ID' })
    async findOne(@Param('id') id: string): Promise<Score> {
        return this.scoresService.findOne(id);
    }
}
