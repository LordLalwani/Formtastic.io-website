# Formtastic.io

Formtastic.io is a cloud native forms backend/API designed to empower server-less architectures.

## Project Status
In-progress, still building! :wrench:

## Components

1. Formtastic Web Application (This repository)
2. Formtastic Web Application API (Private repository)
3. Formtastic API (Private repository)

## Architecture

                            ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
                                                                AWS CLOUD INFRASTRUCTURE                                   │
                            │                                                                                               
                                                                                                                           │
                            │                                                                                               
                                ┌───────────────────────────┐    ┌─────────────────────────┐                               │
                            │   │         CloudFront        │    │       API GATEWAY       │                               
                                │                           │    │                         │                               │
                            │   │   ┌───────────────────┐   │    │                         │   ┌────────────────────┐      
                                │   │ S3 STATIC HOSTING │   │    │   ┌──────────────────┐  │   │       LAMBDA       │      │
    ┌─────────┐             │   │   │ ┌───────────────┐ │   │    │   │ Web Application  │  │   │  ┌───────────────┐ │      
    │End Users│───Access ───────┼──▶│ │Web Application│◀┼───┼────┼──▶│       API        │◀─┼───┼─▶│ API FUNCTIONS │ │      │
    └─────────┘             │   │   │ └───────────────┘ │   │    │   └──────────────────┘  │   │  └───────────────┘ │      
                                │   └───────────────────┘   │    │                         │   └──────────▲─────────┘      │
                            │   │                           │    │                         │              │                
                                └───────────────────────────┘    │                         │     ┌────────┘                │
                            │                                    │                         │     │  ┌────────────┐         
                                                                 │                         │     │  │  MONGO-DB  │         │
                            │                                    │                         │     │  │  ┌──────┐  │         
                                                                 │                         │     └─▶│  │ DATA │  │◀────┐   │
                            │                                    │                         │        │  └──────┘  │     │   
                                                                 │                         │        └────────────┘     │   │
                            │                                    │                         │                           │   
                                                                 │                         │                           │   │
                            │                                    │                         │   ┌────────────────────┐  │   
                                                                 │                         │   │       LAMBDA       │  │   │
        ┌──────────────┐    │                                    │  ┌──────────────────┐   │   │  ┌───────────────┐ │  │   
        │ Applications │───────────Submits API requests──────────┼─▶│  FORMTASTIC API  │◀──┼───┼─▶│ API FUNCTIONS │ │◀─┘   │
        └──────────────┘    │                                    │  └──────────────────┘   │   │  └───────────────┘ │      
                                                                 │                         │   └────────────────────┘      │
                            │                                    └─────────────────────────┘                               
                                                                                                                           │
                            └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
